import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Axios from '../../utils/axios';
import {
	Container,
	Row,
	Col,
	ListGroup,
	OverlayTrigger,
	Popover,
	Button,
	ButtonGroup,
} from 'react-bootstrap';
import { Trash, PencilFill, PencilSquare } from 'react-bootstrap-icons';
import dashboard from '../../styles/Dashboard.module.css';
const Products = () => {
	const [product, setProduct] = useState('');
	const router = useRouter();
	async function addNewProductHandler() {
		try {
			// dispatch({ type: 'CREATE_REQUEST ' });
			const { data } = await Axios.post(
				'/api/admin/products',
				{}
				// {
				// 	headers: {
				// 		authorization: `Bearer ${userInfo.token}`,
				// 	},
				// }
			);
			console.log('data', data);
			if (data.message) {
				// dispatch({ type: 'CREATE_FAIL ' });
				// enqueueSnackbar(data.message, {
				// variant: 'error',
				// });
				console.log('data.message', data);
			} else {
				console.log('data.resulkt', data.data._id);
				// dispatch({ type: 'CREATE_SUCCESS ' });
				// enqueueSnackbar('Product Created successfully', {
				// variant: 'success',
				// });

				router.push(`/admin/new/${data.data._id}`);
			}
		} catch (error) {
			console.log('error', error);

			// dispatch({ type: 'CREATE_FAIL ' });
			// enqueueSnackbar(error.message, {
			// 	variant: 'error',
			// });
		}
	}
	return (
		<Container>
			<Row className={dashboard.header}>
				<Col xs={3} md={3}>
					<h4 className='mt-1'>Products</h4>
				</Col>
				<Col xs={3} md={{ span: 3, offset: 6 }}>
					{/* <Link href="admin/new"> */}
					{/* <a> */}
					<Button variant='dark' onClick={addNewProductHandler}>
						Add Product
					</Button>
					{/* </a> */}
					{/* </Link>s */}
				</Col>
			</Row>
			<Row className={dashboard.products}>
				<ListGroup variant='flush'>
					<ListGroup.Item className={dashboard.listItem}>
						<h6>Nike Kwazei</h6>
						<ButtonGroup aria-label='are you sure'>
							<Button variant='danger' size='sm'>
								Delete
							</Button>
							<Link href='admin/update'>
								<a>
									<Button variant='success' size='sm'>
										Update
									</Button>
								</a>
							</Link>
						</ButtonGroup>
					</ListGroup.Item>
				</ListGroup>
			</Row>
		</Container>
	);
};

export default Products;
