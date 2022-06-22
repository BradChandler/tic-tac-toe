import { useForm } from "react-hook-form";
import classes from "./PlayerSetup.module.css";

const ErrorMessage = ({ msg }) => {
  return <span className={classes.error}>{ msg || "Please enter a value" }</span>
}

const PlayerSetup = ({ onStartGame }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = () => onStartGame(watch());

  return ( 
    <section className={`flex__center grid__sm ${classes.section}`}>
      <h1 className="text__center">Tic-Tac-Toe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <label htmlFor="playerOneName">
          Player One Name
          <input type="text" {...register("playerOneName", { required: true })} id="playerOneName" placeholder="Player One" />
          { errors.playerOneName && <ErrorMessage msg="Enter a name for player one" /> }
        </label>
        <label htmlFor="playerTwoName">
          Player Two Name
          <input type="text" {...register("playerTwoName", { required: true })} id="playerTwoName" placeholder="Player Two" />
          { errors.playerTwoName && <ErrorMessage msg="Enter a name for player two" /> }

        </label>
        <button className="btn btn__blue text__upper">
          Start Playing
        </button>
      </form>
    </section>
  );
}
 
export default PlayerSetup;