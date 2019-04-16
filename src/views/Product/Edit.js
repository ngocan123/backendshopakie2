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
  configUrl
} from 'reactstrap';
//import ManagerGallery from './../Gallery/ManagerGallery';
import axioApi from './../../config/axioConfig';
import qs from 'qs';
import CreatableSelect from 'react-select/lib/Creatable';

let $this;
class Edit extends Component {
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
        name : '', description : '', tags : [], alltags : [], author : '',
        selectedFile: null,
        gallerys: [],
        imageNumber: '',
        imagePath: '',
        price: '',
        _id: ''
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
    this.showAllImage();
    this.setState({
      primary: !this.state.primary,
    });
  }
  //setup send data to serve
  changePrice(e){
    $this.setState({ price : e.target.value });
  }
  changeName(e){
    $this.setState({ name : e.target.value });
  }
  changeDescription(e){
      $this.setState({ description : e.target.value });
  }
  tagsSelectChange = (selectedtag) => {
      $this.setState({ tags : selectedtag });
  }
  componentDidMount(){
    $this.setState({
      _id: $this.props.match.params.id
  });
    axioApi.get('/product/show/'+$this.props.match.params.id).then((res) => {
      const tags = res.data.tags.map(function(obj, i){
          return {value: obj._id, label:obj.label};
      });
      //console.log(tags);
      $this.setState({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description,
          imagePath: res.data.imagePath,
          imageNumber: res.data.imageNumber,
          tags:tags,
      });
  });
  axioApi.get('/product/getAllTags').then((res) => {
      $this.setState({
          alltags : res.data
      });
  });
  this.getAllImage();
  }
onChangeHandler = event=>{
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })
}
test(){
  console.log('test managergallery');
}
savePost(){
  const postdata = {
      name : $this.state.name,
      price : $this.state.price,
      imagePath : $this.state.imagePath,
      imageNumber : $this.state.imageNumber,
      description : $this.state.description,
      tags : $this.state.tags,
      author : $this.props.author,
  }
    axioApi.post('/product/saveProductAndTag', postdata, {
      onUploadProgress: ProgressEvent => {
        console.log('Upload progress:' + Math.round(ProgressEvent.loaded/ProgressEvent.loaded*100) + '%' );
      }
    }).then((res) => {
      $this.props.history.push('/product/index');
    });
}
//upload image
getAllImage(){
  axioApi.get('/gallery/getAll').then((res) => {
      $this.setState({
          gallerys : res.data
      });
  });
}
getIdImage(id){
  axioApi.get('/gallery/show/'+id).then((res) => {
    $this.setState({
      imageNumber: res.data._id,
      imagePath: res.data.path
    });
  });
}
imageNumbers(){
  if($this.state.imageNumber!=''){
    return <input name='imageNumber' className="hidden" value={$this.state.imageNumber}/>;
  }else{
    return '';
  }
}
imagePath(){
  if($this.state.imagePath!=''){
    return <img src={"https://ai-shop2.herokuapp.com"+$this.state.imagePath}/>;
  }else{
    return '';
  }
}
showAllImage(){
  return $this.state.gallerys.map(function(post, i){
      return <Col xs="6" sm="3" className="text-center flol">
      <div color="divItemImage warning">
        <img className="img100" src={'https://ai-shop2.herokuapp.com'+post.path} data-id={post._id}
         onClick={() => $this.getIdImage(post._id)}/>
      </div>
      <div className="clearfix"></div>
      <Label>giay</Label>
    </Col>
  });
}
render() {
    return (
      <div className="animated fadeIn">
      
        <Row>
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                <strong>Thêm sản phẩm</strong>
              </CardHeader>
              <CardBody>
                    <div className="form-group">
                      <Label htmlFor="name">Tên sản phẩm</Label>
                      <Input type="text" onChange={this.changeName} value={$this.state.name} id="name" placeholder="Tên sản phẩm" required />
                    </div>
                    <div className="form-group">
                      <Label htmlFor="price">Giá sản phẩm</Label>
                      <Input type="number" value={$this.state.price} id="price" placeholder="Giá sản phẩm" />
                    </div>
                    <div className="form-group">
                      <Label htmlFor="description">Mô tả</Label>
                      <Input type="textarea" value={$this.state.description} onChange={this.changeDescription} name="description" id="description"
                             placeholder="Mô tả" rows="3"/>
                    </div>
                    <div className="form-group">
                        <Label htmlFor="description">Tags</Label>
                        <CreatableSelect
                            isClearable
                            onChange={this.tagsSelectChange}
                            //onInputChange={this.handleInputChange}
                            options={this.state.alltags}
                            isMulti = {true}
                            value = {$this.state.tags}
                        />
                    </div>
                    <div className="form-group">
                        <Label htmlFor="description">Ảnh đại diện</Label>
                        <div>
                          <Button color="primary" onClick={this.togglePrimary} className="mr-1">Chọn ảnh</Button>
                          {/* <Button color="primary" onClick={() => $this.togglePrimary} className="mr-1">Chọn ảnh</Button> */}
                          <div className="showImage">{this.imagePath()}{this.imageNumbers()}
                          </div>
                        </div>
                    </div>
              </CardBody>
            </Card>
          </Col>
          <aside className="col-sm-4">
            <div className="box_sidebar">
                <div>
                  <button onClick={this.savePost} className="btn btn-sm btn-primary">Cập nhật</button>
                </div>
            </div>
            <div className="h15"></div>
            <CardHeader>
              <strong>Danh mục chính</strong>
            </CardHeader>
            <Card>
              <CardBody>
                  <select name="category_id" className="form-control">
                    <option>Thời trang</option>
                    <option>Điện tử</option>
                  </select>
              </CardBody>
            </Card>
            <CardHeader>
              <strong>Danh mục liên quan</strong>
            </CardHeader>
            <Card>
              <CardBody>
                  <select name="category_id" className="form-control">
                    <option>Thời trang</option>
                    <option>Điện tử</option>
                  </select>
              </CardBody>
            </Card>
            <CardHeader>
              <strong>Kho hàng</strong>
            </CardHeader>
            <Card>
              <CardBody>
                  <select name="category_id" className="form-control">
                    <option>Thời trang</option>
                    <option>Điện tử</option>
                  </select>
              </CardBody>
            </Card>
            </aside>
        </Row>
        {/* =============================Upload ảnh */}


        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                className={'modal-primary modal-lg ' + this.props.className}>
          <ModalHeader toggle={this.togglePrimary}>
            <button className="buttonUploadImage">
              Tải ảnh
              <input type="file" name="file" onChange={this.onChangeHandler}/>
            </button>
            
          </ModalHeader>
          <ModalBody>
           {this.showAllImage()}
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
export default Edit;


