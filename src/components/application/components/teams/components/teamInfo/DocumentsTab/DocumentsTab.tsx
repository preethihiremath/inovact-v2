import { documentUploader } from 'imageUpload/docsUploader'
import React from 'react'
import pdf from 'images/teams/pdf.svg'

const DocumentsTab =(props:any)=>{
    // const loadFile = (e: any)=>{
    //     if(e.target.files)[
    //         documentUploader
    //     ]
    // }
    return(
        <>
         <div className="documents-info">
         { props.team.team_documents.length == 0 ? <div className="text-align--center">No Documents yet </div>: null }
            {
                
            props.team.team_documents.map((item:any,index:number)=>{
                    return(
                            <div className="documents-info__document">
                                <img src={pdf} alt="name"/>
                                <h5 className="text-size--small">file name</h5>  
                            </div>    
                    );
            })}
                <button className="text-style--bold text-color--green documents-info__addFile" onClick={props.viewUploadDocument}>
                    Add File<span className="text-style--bold text-color--green member-info-tab__addFile__icon">+ </span>
                </button>
        </div>
        </>
     
    )
}
export default DocumentsTab;