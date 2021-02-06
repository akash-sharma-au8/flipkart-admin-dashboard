import React from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "../../../components/UI/Model";
import Input from "../../../components/UI/Input";

const UpdateCategoriesModal = (props) => {
  const {
    show,
    handleClose,
    modalTitle,
    size,
    expandedArray,
    checkedArray,
    handleCategoryInput,
    categoryList,
    onSubmit
  } = props;
  return (
    <Modal
      show={show}
      handleClose={handleClose}
      modalTitle={modalTitle}
      size={size}
      onSubmit={onSubmit}
    >
      <Row>
        <Col>
          <h6>Expanded</h6>
        </Col>
      </Row>
      {expandedArray.length > 0 &&
        expandedArray.map((item, index) => (
          <Row key={index}>
            <Col>
              <Input
                value={item.name}
                placeholder={"Category Name"}
                onChange={(e) =>
                  handleCategoryInput("name", e.target.value, index, "expanded")
                }
              />
            </Col>
            <Col>
              <select
                className="form-control"
                value={item.parentId}
                onChange={(e) =>
                  handleCategoryInput(
                    "parentId",
                    e.target.value,
                    index,
                    "expanded"
                  )
                }
              >
                <option>Select Category</option>
                {categoryList.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </Col>
            <Col>
              <select className="form-control"
              value={item.type}
              onChange = {(e) =>
                handleCategoryInput(
                  "type",
                  e.target.value,
                  index,
                  "expanded"
                )}>
                <option value="">Select Type</option>
                <option value="store">Store</option>
                <option value="productList">Product List</option>
                <option value="page">Page</option>
              </select>
            </Col>
          </Row>
        ))}
      <Row>
        <Col>
          <h6>Checked Categories</h6>
        </Col>
      </Row>
      {checkedArray.length > 0 &&
        checkedArray.map((item, index) => (
          <Row key={index}>
            <Col>
              <Input
                value={item.name}
                placeholder={"Category Name"}
                onChange={(e) =>
                  handleCategoryInput("name", e.target.value, index, "checked")
                }
              />
            </Col>
            <Col>
              <select
                className="form-control"
                value={item.parentId}
                onChange={(e) =>
                  handleCategoryInput(
                    "parentId",
                    e.target.value,
                    index,
                    "checked"
                  )
                }
              >
                <option>Select Category</option>
                {categoryList.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </Col>
            <Col>
              <select className="form-control"
                value={item.type}
                onChange={(e) =>
                  handleCategoryInput(
                    "type",
                    e.target.value,
                    index,
                    "checked"
                  )}>
                <option value=''>Select Type</option>
                <option value="store">Store</option>
                <option value="productList">Product List</option>
                <option value="page">Page</option>
              </select>
            </Col>
          </Row>
        ))}
    </Modal>
  );
};

export default UpdateCategoriesModal;
