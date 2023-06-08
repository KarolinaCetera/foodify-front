import { FC, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { capitalize } from "lodash";
import styled from "styled-components";
import { IngredientType } from "@component/typings";
import { useSpring, animated } from "react-spring";
import { Icon } from "@iconify/react";

const StyledTileIngredient = styled.div`
  height: 100%;
  position: relative;

  .tile {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    will-change: transform, opacity;

    h4 {
      margin: 16px 0;
      font-size: 24px;
    }
  }

  .tileFront {
    align-items: center;
    justify-content: center;
    background: #d9d9d9;
  }

  .tileReversed {
    background: #9d82ee;
    padding: 8px;
    height: 100%;
    .reversedContent {
      width: 100%;
      height: 70%;
      h5 {
        font-size: 18px;
      }

      p,
      ul {
        font-size: 14px;
      }

      .ingredientInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .recipeList {
        height: 90%;
        overflow-y: scroll;

        p {
          font-weight: 600;
        }

        li {
          padding: 2px 8px;
        }
      }
    }

    .tileButtons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 30%;

      button {
        cursor: pointer;
        width: 30px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

interface IngredientProps {
  ingredient: IngredientType;
  handleOpenModal?: () => void;
  handleDeleteIngredient: (event: React.MouseEvent<HTMLElement>, id: string) => void;
}

const TileIngredient: FC<IngredientProps> = ({ ingredient, handleDeleteIngredient }) => {
  const [flip, setFlip] = useState(false);
  const handleFlip = () => {
    setFlip(!flip);
  };

  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: `perspective(600px) rotateX(${flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Grid item xs={3} lg={2} sx={{ height: 200 }}>
      <Paper elevation={0} sx={{ height: "100%" }}>
        <StyledTileIngredient onClick={handleFlip}>
          <animated.div className="tile tileFront" style={{ opacity: opacity.to((o) => 1 - o), transform }}>
            <h4>{ingredient.name}</h4>
            <p>{capitalize(ingredient.category)}</p>
          </animated.div>
          <animated.div
            className="tile tileReversed"
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          >
            <div className="reversedContent">
              <div className="ingredientInfo">
                <div>
                  <h5>{ingredient.name}</h5>
                  <p>{capitalize(ingredient.category)}</p>
                </div>
                <div className="tileButtons">
                  <button>
                    <Icon width={24} height={24} icon="material-symbols:edit" color="#9d82ee" />
                  </button>
                  <button onClick={(e) => handleDeleteIngredient(e, ingredient.id)}>
                    <Icon width={24} height={24} icon="material-symbols:close" color="red" />
                  </button>
                </div>
              </div>
              <div className="recipeList">
                <p>Used in:</p>
                <ul>
                  <li>This recipe</li>
                  <li>And this recipe</li>
                  <li>Also this recipe</li>
                  <li>Also this recipe</li>
                  <li>Also this recipe</li>
                  <li>Also this recipe</li>
                  <li>Also this recipe</li>
                </ul>
              </div>
            </div>
          </animated.div>
        </StyledTileIngredient>
      </Paper>
    </Grid>
  );
};

export default TileIngredient;
