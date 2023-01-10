import "./Array.css";
import Title from "../title/Title";
function Array() {
  const titlesText = [
    {
      title: "Títol 1",
      description: "Contingut 1",
    },
    {
      title: "Títol 2",
      description: "Contingut 2",
    },
    {
      title: "Títol 3",
      description: "Contingut 3",
    },
  ];

  return (
    <div className="div_calc">
      {titlesText.map((titlesText, index) => {
        return (
          <Title
            title={titlesText.title}
            description={titlesText.description}
          />
        );
      })}
    </div>
  );
}

export default Array;
