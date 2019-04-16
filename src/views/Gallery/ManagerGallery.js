import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';

import axioApi from './../../config/axioConfig';
import qs from 'qs';
import CreatableSelect from 'react-select/lib/Creatable';

let $this;
class ManagerGallery extends Component {
  constructor(props) {
      super(props); 
      this.toggle = this.toggle.bind(this);
      this.toggleFade = this.toggleFade.bind(this);
      this.toggle = this.toggle.bind(this);
      this.togglePrimary = this.togglePrimary.bind(this);
      this.state = {
        collapse: true,
        fadeIn: true,
        timeout: 300,
        primary: false,
        modal: false,
        name : '', description : '', tags : [], alltags : [], author : '', imagePath: '', selectedFile: null,
      };
      $this = this;
  }

  toggle() {
    $this.setState({ collapse: !$this.state.collapse });
  }

  toggleFade() {
    $this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  //Hien thi modal primary
  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  //setup send data to serve
changeTitle(e){
    $this.setState({ name : e.target.value });
}
changeDescription(e){
    $this.setState({ description : e.target.value });
}
tagsSelectChange = (selectedtag) => {
    $this.setState({ tags : selectedtag });
}
componentDidMount(){
    
}
onChangeHandler = event=>{
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })
}
testAlert(e){
  console.log(e);
  
}
savePost(){
    const data = new FormData()
    data.append('file', $this.state.selectedFile);

    // axioApi.post('/product/profile', data, {
    //   onUploadProgress: ProgressEvent => {
    //     console.log('Upload progress:' + Math.round(ProgressEvent.loaded/ProgressEvent.loaded*100) + '%' );
    //   }
    // }).then((res) => {
    //   console.log(res);
    //   $this.props.history.push('/product/index');
    // });
}
render() {
    return (
      <div className="animated fadeIn">
        <Button color="primary" onClick={this.togglePrimary} className="mr-1">Primary modal</Button>
        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                className={'modal-primary modal-lg ' + this.props.className}>
          <ModalHeader toggle={this.togglePrimary}>Modal title</ModalHeader>
          <ModalBody>
            <Col xs="6" sm="3" className="text-center flol" onClick={ this.test }>
              <Button color="warning" >
                <i class="fa fa-folder" aria-hidden="true"></i>
              </Button>
              <div className="clearfix"></div>
              <Label>giay</Label>
            </Col>
            <Col xs="6" sm="3" className="text-center flol">
              <Button color="warning">
                <i class="fa fa-folder" aria-hidden="true"></i>
              </Button>
              <div className="clearfix"></div>
              <Label>giay</Label>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.togglePrimary}>Cập nhật</Button>
            <Button color="secondary" onClick={this.togglePrimary}>Bỏ qua</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ManagerGallery;
