
export default function Resume(){
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center border-4">
                <h1 className="text-3xl border-4 border-yellow-300">
                    Technical Skills
                </h1>
                <div className="flex flex-row border-4 border-yellow-300">
                    <div>
                        <h2>
                            Software Engineering
                        </h2>
                        <ul>
                            <li>
                                C, Python, Javascript, SQL, HTML, CSS, MATLAB
                            </li>
                            <li>
                                Data structures and algorithms
                            </li>
                            <li>
                                Cloud computing (AWS) system design with CI/CD version control (Git/GitHub)
                            </li>
                            <li>
                                Full-stack web development
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>
                            Firmware Engineering
                        </h2>
                        <ul>
                            <li>
                                Atmel Microchip Studio, C, Arduino
                            </li>
                            <li>
                                Mechatronic system modeling (DC/stepper motors, IR sensors, Hall Effect sensor, color sensor)
                            </li>
                            <li>
                                Microprocessor programming and component interfacing (datasheets)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>
                            Mechanical Engineering
                        </h2>
                        <ul>
                            <li>
                                MATLAB, SIMULINK, SOLIDWORKS, Excel, JMP
                            </li>
                            <li>
                                Version-controlled product development (SOLIDWORKS PDM)
                            </li>
                            <li>
                                Control system, finite element, and statistical analysis
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            <h1>
                Work Experience
            </h1>
            <div>
                <h2>
                    <div>Lake Shore Cryotronics - Woburn, MA</div>
                    <div>May 2022-Aug 2022</div>
                </h2>
                <div><i>Mechanical Engineering Intern</i></div>
                <ul>
                    <li>
                        Analyzed ST-500 cryostat tolerance stack up (TSU) and initiated an engineering change order for an approximate
                        67% reduction (~1 mm) in the worst-case TSU without threat to product budget.
                    </li>
                    <li>
                        Engaged in research and development of a collet-style adjustable sample holder with cooling capacity effective to 
                        approximately 4 Kelvin to linearize manufacturing through a more versatile product.
                    </li>
                    <li>
                        Applied complete cyclic engineering method in new product development and sustaining engineering, interfacing 
                        with SOLIDWORKS PDM for company coordination.
                    </li>
                </ul>
            </div>

            <div>
                <h2>
                    <div>Federal Aviation Administration - Washington, DC</div>
                    <div>June 2021-Aug 2021</div>
                    <div></div>
                </h2>
                <p><i>Systems Engineering Intern</i></p>
                <ul>
                    <li>
                        Established an Inherent Availability requirement at the three 9's threshold (99.9% availability) for Non-Federal 
                        Remote Airport Traffic Control Towers (ATCT) to ensure adherence to safety and performance standards within 
                        the National Airspace System (NAS).
                    </li>
                    <li>
                        Substantiated Federal authority to enforce an availability requirement for Non-Federal Remote Tower (RT) 
                        systems using existing domestic and foreign documents detailing Non-Federal RT system association to the NAS.
                    </li>
                    <li>
                        Amended RT Systems Minimum Functional and Performance Requirements for Non-Federal Applications
                        document to reflect updated Non-Federal Remote ATCT system RMA requirements.
                    </li>
                </ul>
            </div>

            <div>
                <h2>
                    <div>MATLAB Grader - Durham, NH</div>
                    <div>Sep 2021-Dec 2021</div>
                    <div></div>
                </h2>
                <p><i>Assignment Grader</i></p>
                <ul>
                    <li>
                        Interpreted students' unique script architectures to assist in debugging and provide constructive feedback to 
                        promote growth and enhance learning.
                    </li>
                    <li>
                        Developed appreciation for producing personally and externally comprehensible work for effective collaboration.
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <h1>
                Education
            </h1>
            <div>
                <h2>
                    <div>Bachelor of Science: Mechanical Engineering</div>
                    <div>Aug 2018-Dec 2022</div>
                    <div></div>
                </h2>
                <div><i>University of New Hampshire - Durham, NH</i></div>
                <div>GPA: 3.1</div>
                <div></div>
                <ul>
                    <li>
                        Intramurals: Flag Football, Softball, Soccer
                    </li>
                    <li>
                        Dean's List
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <h1>
                Certifications
            </h1>
            <ul>
                <li>
                    Security Clearance
                </li>
                <li>
                    Class B Commerical Driver's License
                </li>
                <li>
                    US DOT health card
                </li>
            </ul>
        </div>
    </div>
    )
}