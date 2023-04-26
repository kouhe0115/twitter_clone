import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widget from "./components/widget/Widget";

function App() {
    return (
        <div className="app">
            {/* Sidebar */}
            <Sidebar/>

            {/* Timeline */}
            <Timeline/>

            {/* widget */}
            <Widget/>
        </div>
    );
}

export default App;
