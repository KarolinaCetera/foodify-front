import { FC } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { Accordion } from "@component/components/accordion";
import { IngredientType } from "@component/typings";

interface IngredientProps {
  ingredient: IngredientType;
  handleOpenModal?: () => void;
}

const StyledIngredient = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  h5 {
    font-size: 20px;
    font-weight: 600;
    line-height: 35px;
  }
  .ingredientDetails {
  }
`;

const AccordionIngredient: FC<IngredientProps> = ({ ingredient, handleOpenModal }) => {
  return (
    <Accordion
      title={ingredient.name}
      subtitle={_.capitalize(ingredient.category)}
      content={
        <StyledIngredient onClick={handleOpenModal}>
          <div className="ingredientDetails">
            <div>
              <p>Used in:</p>
              <ul>
                <li>This recipe</li>
                <li>This recipe</li>
                <li>This recipe</li>
              </ul>
            </div>
          </div>
        </StyledIngredient>
      }
    />
  );
};
export default AccordionIngredient;
