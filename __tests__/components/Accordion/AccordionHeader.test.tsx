/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import AccordionHeader from "../../../src/components/Accordion/AccordionHeader";

describe("<AccordionFooter />", () => {
  const tree = shallow(<AccordionHeader header="1234" />);

  describe("Should Render", () => {
    it("Should match snapshot", () => {      
      expect(tree).toMatchSnapshot();
    });
  });
});
