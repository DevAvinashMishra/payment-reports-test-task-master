/* eslint-disable no-console */
import React from "react";
import { shallow } from "enzyme";
import AccordionFooter from "../../../src/components/Accordion/AccordionFooter";

describe("<AccordionFooter />", () => {
  const tree = shallow(<AccordionFooter value="1234" />);

  describe("Should Render", () => {
    it("Should match snapshot", () => {      
      expect(tree).toMatchSnapshot();
    });
  });
});
