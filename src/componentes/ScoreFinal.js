export default function ScoreFinal({ score }) {
  return (
      <div className="row py-5">
        <div className="col-12 text-center">
          <div className="h4 alert alert-info">Tu puntación final es de: {score}</div>
        </div>
      </div>
  );
}
