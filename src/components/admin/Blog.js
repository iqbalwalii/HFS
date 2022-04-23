import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import FullLayout from "../../layout/authLayout";
import dashboard from "../../styles/Dashboard.module.css";
import { connect } from "react-redux";
const Blog = (props) => {
  return (
    <FullLayout>
      <Container>
        <Row className={dashboard.header}>
          <Col xs={12}>
            <h3 className="text-center">Blogs</h3>
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover className={dashboard.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Blogger</th>
                <th>User</th>
                <th>Date Posted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>@Mark</td>
                <td>Ottoman Empire</td>
                <td>7006554446</td>
              </tr>
              <tr>
                <td>2</td>
                <td>@Mark</td>
                <td>Ottoman Empire</td>
                <td>7006554446</td>
              </tr>
              <tr>
                <td>3</td>
                <td>@Mark</td>
                <td>Ottoman Empire</td>
                <td>7006554446</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </FullLayout>
  );
};

export default Blog;
