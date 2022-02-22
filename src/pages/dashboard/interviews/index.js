import React from "react";
import { Flex, Box } from "reflexbox";
import { Switch } from "antd";
import CompInterview from "../../../components/Dashboard/_interviews";
import Layouts from "../../../components/Layouts";

function Interviews() {
  return (
    <Layouts>
      <Flex>
        <Box>
          <p>สถานะ : </p>
        </Box>
        <Box style={{padding:"0 10px"}}>
          <Switch
            checkedChildren="พร้อม"
            unCheckedChildren="ไม่พร้อม"
            defaultChecked
          />
        </Box>
      </Flex>
      <CompInterview />
    </Layouts>
  );
}

export default Interviews;
