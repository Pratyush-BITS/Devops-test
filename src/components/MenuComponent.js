import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import Dishdetail from "./DishdetailComponent";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return ( <Dishdetail dish={dish}> </Dishdetail>);
        else
            return(<div></div>);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                  <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="auto" max-width="250px" height="auto" max-height="250px" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                      </CardImgOverlay>
                  </Card>
              </div>
            );
        });


        return (
            <div className="container">
                
                <div className="row">
                    {menu}
                </div>

                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>

            </div>
        );
    }
}


 

export default Menu;