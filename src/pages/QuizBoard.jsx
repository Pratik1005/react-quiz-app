import "../styles/quizboard.css";
import {useEffect} from "react";
import { NavMenu, Footer } from "../components";

const QuizBoard = () => {
    useEffect(() => {
        console.log(localStorage.getItem("quizScores"));
    }, []);
    
    return (
        <>
        <NavMenu />
        <section className="app-ctn">
            <h2 className="text-center pd-lg">Quiz Board</h2>
            <div className="quiz-board-ctn">
                <div className="score-ctn pd-md br-md mg-bottom-md">
                    <p className="para-lg">Basic of Stock Market</p>
                    <p className="para-lg fw-bold">80</p>
                </div>
                <div className="score-ctn pd-md br-md">
                    <p className="para-lg">Basic of Stock Market</p>
                    <p className="para-lg fw-bold">80</p>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}

export {QuizBoard};