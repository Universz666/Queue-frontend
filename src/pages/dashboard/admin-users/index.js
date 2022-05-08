import { Checkbox, Divider, Button, Table } from "antd";
import React, { useState } from "react";
import { Box, Flex } from "reflexbox";
import Layouts from "../../../components/Layouts";

import useSWR from "swr";

function Users() {
  const url = "http://localhost:8000/api/v1/getAllUser";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];
  const data_all = [];
  if (data) {
    for (let i = 0; i < data?.detail.length; i++) {
      data_all.push(data?.detail[i]);
    }
  }
  console.log(data_all);




  return (
    <Layouts>
      <Table
        columns={columns}
        dataSource={data_all}
      ></Table>
      {/* <Flex flexDirection="column">
        <Flex>
          <Box width={1 / 6}>
            <Checkbox />
          </Box>
          <Box width={1 / 6}>Date Join</Box>
          <Box width={1 / 6}>Full Name</Box>
          <Box width={1 / 6}>Email</Box>
          <Box width={1 / 6}>Role</Box>
          <Box width={1 / 6}>Edit</Box>
        </Flex>
        <Divider />
        <Flex>
          <Box width={1 / 6}>
            <Checkbox />
          </Box>
          <Box width={1 / 6}>22/02/2022</Box>
          <Box width={1 / 6}>กิตติภณ ปาคำทอง</Box>
          <Box width={1 / 6}>kittiphon.pa.61@ubu.ac.th</Box>
          <Box width={1 / 6}>Admin</Box>
          <Box width={1 / 6}>
            <Button
              size="small"
              style={{
                color: "#FFF",
                backgroundColor: "#FF3D00",
                borderRadius: "5px",
                borderColor: "#FF3D00",
              }}
            >
              แก้ไข
            </Button>
          </Box>
        </Flex>
      </Flex> */}
    </Layouts>
  );
}

export default Users;
