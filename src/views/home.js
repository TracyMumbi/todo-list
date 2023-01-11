import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TodoList from "../components/todolist";

function Home () {
    return (
        <div>
            <NavBar />
            <section>
                <TodoList />
                <TodoList />
            </section>
            <Footer />
        </div>
    )
}

export default Home;



