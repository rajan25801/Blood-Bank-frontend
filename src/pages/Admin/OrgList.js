import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";

const OrgList = () => {
  const [organizations, setOrganizations] = useState([]);

  // Fetch organizations
  const getOrganizations = async () => {
    try {
      const { data } = await API.get("/admin/org-list");
      console.log(data);
      if (data?.success) {
        setOrganizations(data.organizations); // ✅ Corrected key
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrganizations();
  }, []);

  // DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      let answer = window.prompt(
        "Are you sure you want to delete this organization?",
        "Sure"
      );
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete-donar/${id}`);
      alert(data?.message);
      getOrganizations(); // Refresh list instead of reload
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="mb-4">Organization List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Organization Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {organizations?.map((org) => (
            <tr key={org._id}>
              <td>{org.organisationName}</td>
              <td>{org.email}</td>
              <td>{org.phone}</td>
              <td>{moment(org.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(org._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrgList;
