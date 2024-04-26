import React from "react";

const Navbar = () => {

    return (
        
            <div style= {{display: 'flex', flexDirection: 'column', backgroundColor: '#3b82f6', padding: '1rem', paddingTop: '1rem', paddingBottom: '1rem'}}>
        
                <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>
        
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                </div>
                    <div style={{textAlign : 'right', display:'flex' , alignItems:'center'}}>
                    {
                        typeof window !== 'undefined' && localStorage.getItem("token")
                            ?
                            <button
                                onClick={() => { localStorage.removeItem("token"); window.location.reload() }}
                                className="basicDarkButton p-2 py-2 mt-2"
                                style={{ background: "var(--base-color)", color: "white" }}
                            >
                                Logout
                            </button>
                            :
                            <a
                                href="/auth/login"
                                className=" basicDarkButton p-2 py-2 mt-2"
                                style={{ background: "var(--base-color)", color: "white" }}
                            >Login</a>

                    }
                </div>
            </div>
        </div>
    );

};


export default Navbar;
