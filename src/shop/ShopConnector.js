import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect } from "react-redux";
import {loadData} from "../data/ActionCreators";
import {Shop} from "./Shop";
import { DataTypes } from "../data/Types";

const mapStateToProps = (dataStore) => ({//리덕스 스토어 상태를 조회해서 어떤 것들을 props로 넣어 줄지 정의
  ...dataStore
})
const mapDispatchToProps = {
  loadData
}


const filterProducts = (products = [], category) => 
  (!category || category === "All") ? products :  products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps) (
  class extends Component {
    render() {
      console.log("shop connector.js",this );
      return <>
        <Switch>
          <Route path="/shop/products/:category?"/* /products까지 오면 다음 주소이름을 category 라는 변수로 넣는다 */
            render={(routeProps) => 
              <Shop {...this.props} {...routeProps}
                products={filterProducts(this.props.products, routeProps.match.params.category) } 
              />
            } 
          />
          <Redirect to="/shop/products"/>{/* App 에서 Redirect /shop으로 오면 다시 /products 로 전달 */}
        </Switch>
      </>
    }
    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      this.props.loadData(DataTypes.PRODUCTS);
    }
  }
)