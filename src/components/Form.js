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
    // const selectId = e.target.
    this.setState({
      licenceValue: licenceValue
    })
  }


  render(){

    return (
      <div>
        <Grid>
          <Row>
            <Col lg={8}>
              <form action="" className="licence">

                <Row className="licence-container">
                  <Col className="licence__list" >
                    {licencesPlans.map((plan) => {
                      return (
                        <label htmlFor="" className="text-margin">
                          <input type="radio" id={plan.id} name="genre" value={plan.value} key={plan.id}
                                 onChange={this.handleChange}/>
                          LICENSE PLAN#{plan.id}
                        </label>
                      )
                    })}


                  </Col>

                  <Col className="licence__list licence__list_addition-text">
                    {licenseValue.map(el => {
                      return (
                        <div className="text-margin" key={el}>
                          {el} per license
                        </div>
                      )
                    })}

                  </Col>

                </Row>

                <Row className="licence-amount-container">
                  <Col>
                    <div className="licence-amount-container__option-select">

                      <span className="option-select-text">Number of licenses:</span>

                      <select name="ustroistva" className="" onChange={this.handleSelectChange}>
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

                <Row className="licence-total-amount-container">
                  <Col className="">
                    Total amount <span className="licence-total-text">${this.state.radioButtonCheckedValue * this.state.licenceValue}</span>
                  </Col>
                </Row>
                <Row className="licence-button-container">
                  <Col >
                    <button className="Button Button__standart">
                      Buy now
                    </button>
                  </Col>
                </Row>

                <Row className="licence-amount-container">
                  <Col className="">
                    Selected plan {this.state.radioButtonCheckedId}
                  </Col>
                </Row>

              </form>
            </Col>
          </Row>
          <div></div>
        </Grid>
      </div>
    )
  }
}


export default Form;

