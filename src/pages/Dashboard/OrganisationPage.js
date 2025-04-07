import React, { useEffect, useState, useCallback } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  // useCallback to prevent infinite re-rendering
  const getOrg = useCallback(async () => {
    try {
      if (user?.role === "donar" || user?.role === "hospital") {
        const { data } = await API.get("/organization/get-organizations"); // FIXED ROUTE

        if (data?.success) {
          setData(data?.organisations); // FIXED RESPONSE HANDLING
        }
      }
    } catch (error) {
      console.log("Error fetching organisations:", error);
    }
  }, [user]);

  useEffect(() => {
    getOrg();
  }, [getOrg]);

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((record) => (
              <tr key={record._id}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address || "N/A"}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Organisations Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrganisationPage;
