import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_viewcompany from './navbar_viewcompany2';
import axios from 'axios';
var k;
sessionStorage.clear();
function Cards(props) {
    {
        k="/adminapply/i="+props.job_id;
    }
    return (
                
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <strong><h6 className="card-title  centers">{props.location}</h6></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            <a href={k} className="btn btn-primary text_size left_m2">Apply</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
                    
    )
                    }
const Cardlist = ({ Joblist }) => {
    return (
        <div className="gridwraper">
        {
            Joblist.map((user, i) => {
            return (<>
                <Cards
                key={i}
                job_id={Joblist[i]._id}
                title={Joblist[i].job_title}
                content={Joblist[i].job_description}
                location = {Joblist[i].location}
                />
                </>
            );

            })
        }
        </div>
    );
    }
var arr= JSON.parse(localStorage.getItem("company"));
class adminjobs extends Component {
    constructor(props){
    super(props);
    this.body = { 
        "company_id" : arr._id,
    }
    this.header = {'Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
    }
    

    companyjoblist (){
        var job = [];
        // POST request using fetch with error handling
        axios.post('https://camprec.herokuapp.com/api/jobs/list',this.body,this.header)
            .then(function(response) {
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (response.data && response.data.message) || response.status;
                    return Promise.reject(error);
                }
                localStorage.setItem('jobs',JSON.stringify(response.data))
        })
         .catch(error => {
                console.log(error);
                window.alert("something went wrong")
                
            });
            if(job)
            return job;
            
    }; 


    render() {
        this.companyjoblist()
        return (
            <>
            <Navbar_viewcompany/>
            <section className="image width heights">
                        <div className = "get_started">
                                <h2 className='text_center margintop'>
                                <strong className = "brand-name leftmargin">Jobs</strong>
                                </h2>
                        </div>
                        <div className="gridwraper">
                            <Cardlist Joblist={JSON.parse(localStorage.getItem('jobs'))}/>
                        </div>
            </section>
            </>
        );
    };
}

export default adminjobs ;