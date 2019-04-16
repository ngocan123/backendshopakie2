import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import axioApi from './../../config/axioConfig';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPosts, deletePost } from './../../redux/actions';

const mapStateToProps = state => {
    return{
        posts : state.postreducer.posts  // redux_step4 getting data from store and connect with view
    }
}

let $this;

class IndexAdmin extends Component {

  constructor(props){
  super(props);
      $this = this; 
  }
	// componentDidMount(){
  //     this.props.getPosts($this.props.loginuser);  // redux_step1 calling to actions
  // }    
  // async deletePost(id){
  //     const returndata = await $this.props.deletePost(id);
  //     if(returndata.data.message == "deleted"){
  //         $this.props.getPosts($this.props.loginuser);
  //     }else{
  //         alert("something error"); console.log(returndata);
  //     }
  // }
  tabRows(){
      return $this.props.posts.map(function(post, i){
          return <tr key={i}>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{(post.author)? post.author.name : ''}</td> 
                  <td>
                      <Link to={"/editPost/"+post._id}><button>Edit</button></Link>                    
                      <button onClick={() => $this.deletePost(post._id)}>Delete</button></td>                   
                  </tr>;
      });
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Danh sách tài khoản
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default IndexAdmin;
