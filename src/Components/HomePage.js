import React from "react";

const HomePage = () => (
  <div>
    <div></div>
    <tbody>
      <tr>
        <th>S.No</th>
        <th>Issue Type</th>
        <th>Link</th>
      </tr>
      <tr>
        <td>1</td>
        <td>ASN - Verify/Unverify</td>
        <td>
          <button>Click Here</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          Tote is in “Allocated and Pulled” status, but no open picks/tasks
          found
        </td>
        <td>
          <button>Click Here</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Tote stuck in Consumed status</td>
        <td>
          <button>Click Here</button>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Unable to induct wave</td>
        <td>
          <button>Click Here</button>
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>
          Wave Number is present in Carton Start report but the associated task
          is in assigned status without any tote being induct for it.
        </td>
        <td>
          <button>Click Here</button>
        </td>
      </tr>

      <tr>
        <td>6</td>
        <td>OLPN in Packing</td>
        <td>
          <button>Click Here</button>
        </td>
      </tr>
      <tr>
        <td>7</td>
        <td>Resetting Induct tote task</td>
        <td>
          <button>Click Here</button>
        </td>
      </tr>
    </tbody>
  </div>
);

export default HomePage;
