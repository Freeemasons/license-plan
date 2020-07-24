import React, {Component} from "react";
import { Row, Col, Grid } from "react-flexbox-grid";



const licencesPlans = [
  { id: 1, value: 13 },
  { id: 2, value: 20 },
  { id: 3, value: 24 },
];

const licenseValue = [13,20,24]

const optionValue = [10,20,30]

class Form extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  state = {
    radioButtonCheckedValue: 13,
    radioButtonCheckedId: 1,
    licenceValue: 10
  }

  handleChange(e) {

    const buttonId = e.target.value;

    console.log('buttonId', buttonId)

    this.setState({
      radioButtonCheckedValue: buttonId, radioButtonCheckedId: e.target.id
    })
  }

  handleSelectChange(e) {

    const licenceValue = e.target.value
    console.log(e.target.value)

    this.setState({
      licenceValue: licenceValue
    })
  }


  render(){

    return (
      <div>
        <Grid fluid>
          <Row>
            <Col  xs={8} lg={8}>
              <form action="" className="licence">
                {licencesPlans.map((plan,i) => {
                  return (
                    <Row between='xs' className="licence-container margin-0">
                      <Col  className="licence__list" >
                        <label htmlFor="" className="text-margin">
                          <input type="radio" id={plan.id} name="genre" value={plan.value} key={plan.id} className="licence-container__input"
                                 onChange={this.handleChange}/>
                          <span className="text-decoration-font">LICENSE PLAN#{plan.id}</span>
                        </label>
                      </Col>

                      <Col  className="licence__list licence__list_addition-text">
                        <div className="text-margin">
                          {licenseValue[i]} per license
                        </div>
                      </Col>
                    </Row>
                  )
                  })}
                <div className="border"></div>

                <Row className="licence-amount-container">
                  <Col>
                    <div className="licence-amount-container__option-select">
                      <span className="option-select-text">Number of licenses:</span>
                      <select name="licenceValueData" className="license-selected-value" onChange={this.handleSelectChange}>
                        {optionValue.map(el => {
                          return(
                            <option value={el} key={el}>
                              {el}
                            </option>
                            )
                        })}
                      </select>
                    </div>
                  </Col>
                </Row>

                <div className="border"></div>
                <Row className="licence-total-amount-container">
                  <Col className="">
                  TOTAL: <span className="licence-total-text">${this.state.radioButtonCheckedValue * this.state.licenceValue}<span className="little-text">us</span></span>
                  </Col>
                </Row>
                <Row className="licence-button-container">
                  <Col >
                    <button className="Button Button__standart">
                      Buy now
                    </button>
                  </Col>
                </Row>

                <Row className="licence-selected-plan-container ">
                  <Col className="licence-selected-plan-text">
                    Selected plan: #{this.state.radioButtonCheckedId}
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default Form;

