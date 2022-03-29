import { Container, Row, Col } from "react-bootstrap";
import "./expstyle.css";
import SingleExperience from "./SingleExperience";

// 6242131ed339840015c883bb

const ExperienceSection = (props) => {
  console.log(props.data);
  return (
    <>
      {props.data &&
        props.data.map((value) => {
          return (
            <SingleExperience key={value._id} data={value} />
          );
        })}
    </>
  );
};
export default ExperienceSection;