import React from 'react'
import student from '../../../../images/user-info/student.png'
import enterprenuer from '../../../../images/user-info/analytics.png'
import mentor from '../../../../images/user-info/mentor.png'
import { MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'

type AppProps = {
    nextStep: any
    handleChange: any
    values: any
}
const RoleSelection = ({ nextStep, handleChange, values }: AppProps) => {
    const Continue = (e: any) => {
        e.preventDefault()
        nextStep(2)
    }
    const [activeIndex, setActiveIndex] = React.useState(0)

    const toggleClick = (index: number) => {
        setActiveIndex(index)
        console.log(index)
    }

    return (
        <div className="user-info">
            <div className="user-info__card">

                <section className="role-selection">

                    <div className="role-selection__text">
                        <h6 className="heading-secondary">Select Profile</h6>
                        <p className="paragraph-primary--red">
                            *Mandatory fields
                        </p>
                    </div>
<form className="role-selection__form">
<div className="role-selection__form__cards">
                        <MDBRow>
                            <MDBCol
                                sm="12"
                                md="6"
                                lg="4"
                                className="role-selection__form__cards__col"
                                onClick={() => toggleClick(0)}
                            >
                                <div
                                    className={
                                        activeIndex === 0
                                            ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                                            : 'role-selection__form__cards__item'
                                    }
                                >
                                    <img
                                        src={student}
                                        id="student"
                                        alt="student"
                                        onClick={handleChange('role')}
                                    />
                                    <h6>Student</h6>
                                </div>
                            </MDBCol>

                            <MDBCol
                                sm="12"
                                md="6"
                                lg="4"
                                className="role-selection__form__cards__col"
                                onClick={() => toggleClick(1)}
                            >
                                <div
                                    className={
                                        activeIndex === 1
                                            ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                                            : 'role-selection__form__cards__item'
                                    }
                                >
                                    <img
                                        src={mentor}
                                        id="mentor"
                                        alt="mentor"
                                        onClick={handleChange('role')}
                                    />
                                    <h6>Mentor</h6>
                                </div>
                            </MDBCol>

                            <MDBCol
                                sm="12"
                                md="6"
                                lg="4"
                                className="role-selection__form__cards__col"
                                onClick={() => toggleClick(2)}
                            >
                                <div
                                    className={
                                        activeIndex === 2
                                            ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                                            : 'role-selection__form__cards__item'
                                    }
                                >
                                    <img
                                        src={enterprenuer}
                                        id="enterprenuer"
                                        alt="enterprenuer"
                                        onClick={handleChange('role')}
                                    />
                                    <h6>Enterprenuer</h6>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                    <div className="buttons ">
                    <MDBBtn color='success' 
                                  onClick={ Continue }  className="button button__green">Next</MDBBtn>
                    </div>
</form>
                    
                </section>
            </div>
        </div>
    )
}

export default RoleSelection
