/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import AccordionSummary from "../../../src/components/Accordion/AccordionSummary";

describe("<AccordionFooter />", () => {
  const tree = shallow(<AccordionSummary projectName="Project name" grandTotalPayment="1235" />);

  describe("Should Render", () => {
    it("Should match snapshot", () => {      
      expect(tree).toMatchSnapshot();
    });
  });
});
