/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import Report from "../../src/page/Report";

describe("<AccordionFooter />", () => {
  const tree = shallow(<Report />);

  describe("Should Render", () => {
    it("Should match snapshot", () => {  
      expect(tree).toMatchSnapshot();
    });
  });
});
