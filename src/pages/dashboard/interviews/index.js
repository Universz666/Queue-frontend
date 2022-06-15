import { React, useState } from "react";
import { Flex, Box } from "reflexbox";
import { Switch } from "antd";

import CompInterview from "../../../components/Dashboard/_interviews";
import Landing from "../../../components/LayoutsLanding";

function Interviews() {
  const [checkstate, setCheckStae] = useState(true);

  function onChange(checked) {
    setCheckStae(checked);
  }

  return (
    <Landing>
      <Flex>
        <Box>
          <p>สถานะ : </p>
        </Box>
        <Box style={{ padding: "0 10px" }}>
          <Switch
            checkedChildren="พร้อม"
            unCheckedChildren="ไม่พร้อม"
            defaultChecked
            onChange={onChange}
          />
        </Box>
      </Flex>
      {checkstate ? <CompInterview /> : <></>}
    </Landing>
  );
}

export default Interviews;
