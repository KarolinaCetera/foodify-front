import { FC, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Icon } from "@iconify/react";

const StyledAccordion = styled.div`
  .accordionHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 8px;
    cursor: pointer;

    .headerContent {
      h4 {
        transition: 0.2s ease-in-out;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 8px;
      }

      h5 {
        transition: 0.2s ease-in-out;
        font-size: 16px;
        font-weight: 400;
      }

      h4.colouredHeader {
        color: #9d82ee;
      }
    }

    i {
      transition: 0.2s ease-in-out;
      transform-origin: center;
    }
  }

  .accordionItem {
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    cursor: pointer;
  }

  .accordionContent {
    margin: 16px;
  }
`;

interface AccordionProps {
  title: string;
  subtitle?: string;
  content: JSX.Element;
}

export const Accordion: FC<AccordionProps> = ({ title, content, subtitle }) => {
  const [open, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!open);
  };

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "0", color: "#000" },
    to: { opacity: "1", maxHeight: open ? "120px" : "0" },
    config: { duration: 300 },
  });

  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#000",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: !open ? "#000" : "#9d82ee",
    },
    config: { duration: 120 },
  });

  return (
    <StyledAccordion onClick={handleOpen}>
      <div className="accordionHeader">
        <div className="headerContent">
          <h4 className={open ? "colouredHeader" : ""}>{title}</h4>
          <h5>{subtitle}</h5>
        </div>
        <animated.i style={iconAnimation}>
          <Icon icon="material-symbols:keyboard-arrow-down" width={32} height={32} />
        </animated.i>
      </div>
      <animated.div className="accordionItem" style={openAnimation}>
        <div className="accordionContent">{content}</div>
      </animated.div>
    </StyledAccordion>
  );
};
