import '/Work/LearnREACT/webdemo/src/App.css';
import profile from '/Work/LearnREACT/webdemo/src/pages/profile.JPEG';

function Example2(){
    return(
            <div className="bcard">
                <br/>
                <img src={profile} className="profilepic"/>
                <h1><strong>ANKUR DAVE</strong></h1>
                <p>Developer | Technical Analyst</p>
                <br/>
                <ul>
                   <li>Java</li>
                   <li>React</li>
                   <li>HTML</li>
                   <li>CSS</li>
                </ul>
                <br/>
                <p><strong>Contact: 437-986-1821<br/>Email: ankurdave9@gmail.com<br/>Address: 21 Mackinac Crest. ON M1j 1P8</strong></p>
            </div>
    );
}

export default Example2;