import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Axios from '../../../utils/axios';
const Add = ({ productId }) => {
	const [images, setImages] = useState({});
	const [inputValues, setInputValues] = useState({
		brand: '',
		name: '',
		description: '',
		price: '',
		category: '',
		file: '',
	});
	const onClickHandler = (e) => {
		e.preventDefault();
		console.log(inputValues);
	};

	async function onSubmitHandler(e) {
		// closeSnackbar();
		e.preventDefault();
		try {
			// dispatch({ type: 'UPDAT_REQUEST' });

			const { data } = await Axios.put(
				`/api/admin/products/${productId}`,
				{
					...inputValues,
					bannerImage: inputValues.file,
					images: Object.values(images),
				}
				// { headers: { authorization: `Bearer ${userInfo.token}` } }
			);
			if (data.message) {
				// dispatch({ type: 'UPDATE_FAIL' });
				console.log('res product update message', data.message);

				// enqueueSnackbar(data.message, { variant: 'error' });
				return;
			} else {
				// dispatch({ type: 'UPDATE_SUCCESS' });

				// enqueueSnackbar('Product updated successfully', {
				// variant: 'success',
				// });
				console.log('res product update else', data);
				router.push('/admin/products');
			}
		} catch (error) {
			// dispatch({ type: 'UPDATE_FAIL' });

			console.log('save catch errrrrr', error);
			// enqueueSnackbar(error.message, { variant: 'error' });
		}
	}

	useEffect(() => {
		// if (!userInfo) {
		// 	router.push('/login?redirect=/products');
		// 	return;
		// } else {
		async function fetchProduct() {
			try {
				// dispatch({ type: 'FETCH_REQUEST' });
				const { data } = await Axios.get(
					`/api/admin/products/${productId}`
					// {
					// 	 headers: {
					// 	 	authorization: `Bearer ${userInfo.token}`,
					// 	 },
					// }
				);
				if (data.status === 200) {
					console.log('use effeft  product trues', data);
					// setValue('name', data.product.name);
					// setValue('brand', data.product.brand);
					// setValue('slug', data.product.slug);
					// setValue('price', data.product.price);
					// setValue('bannerImage', data.product.bannerImage);
					// setValue('category', data.product.category);
					// setValue('countInStock', data.product.countInStock);
					// setValue('description', data.product.description);
					setInputValues({
						brand: data.product.brand,
						name: data.product.name,
						description: data.product.description,
						price: data.product.price,
						category: data.product.category,
						file: data.product.bannerImage,
						// one: data.product.images[0]
						// 	? data.product.images[0]
						// 	: '',
						// two: data.product.images[1]
						// 	? data.product.images[1]
						// 	: '',
						// three: data.product.images[2]
						// 	? data.product.images[2]
						// 	: '',
						// four: data.product.images[3]
						// 	? data.product.images[3]
						// 	: '',
						// five: data.product.images[4]
						// 	? data.product.images[4]
						// 	: '',
						// six: data.product.images[5]
						// 	? data.product.images[5]
						// 	: '',
					});

					data.product.images.forEach((imgUrl, idx) => {
						setImages({ ...images, [idx]: imgUrl });
					});
				} else {
					console.log(data.message);
				}
			} catch (err) {
				console.log(err);
				// dispatch({ type: 'FETCH_FAILED', payload: error.message });
			}
		}
		fetchProduct();
		// }
		// if (userInfo) {
		// 	setValue('name', userInfo.name);
		// 	setValue('email', userInfo.email);
		// }
	}, [productId]);
	// UPLOAD HANDLER

	async function uploadHandler(e) {
		console.log(
			'called upload handler',
			e.target.id ? e.target.id : e.target
		);
		const file = e.target.files[0];
		let bodyFormData = new FormData();
		bodyFormData.append('file', file);
		try {
			// dispatch({ type: 'UPLOAD_REQUEST' });
			const { data } = await Axios.post(
				'/api/admin/upload',
				bodyFormData,
				{
					'Content-Type': 'multipart/form-data',
				}
			);
			console.log('resp', data);
			if (data.message) {
				console.log('messa', data.message);
				// enqueueSnackbar(data.message, { variant: 'error' });
				// dispatch({ type: 'UPLOAD_FAILED', payload: data.message });
			} else {
				console.log('resp succ', data);

				// setValue('bannerImage', data.result.secure_url);
				// dispatch({ type: 'UPLOAD_SUCCESS' });
				// enqueueSnackbar('Uploaded successfully', {
				// variant: 'success',
				// });

				if (e.target.id == 'formFile') {
					setInputValues({
						...inputValues,
						file: data.result.secure_url,
					});
				} else {
					setImages({
						...images,
						[e.target.id]: data.result.secure_url,
					});
				}
			}
		} catch (error) {
			console.log('error upload', error);
			// dispatch({ type: 'UPLOAD_FAILED', payload: error.message });

			// enqueueSnackbar(error.message, { variant: 'error' });
		}
	}

	return (
		//Add Products
		<Container>
			<h3 className='text-center mt-4 mb-2'> Add Product</h3>
			<Form>
				<Form.Group as={Col} controlId='formGridText'>
					<Form.Label>Brand</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Shoe Name'
						value={inputValues.brand}
						onChange={(e) =>
							setInputValues({
								...inputValues,
								brand: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId='formGridText1'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Shoe Name'
						value={inputValues.name}
						onChange={(e) =>
							setInputValues({
								...inputValues,
								name: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId='formGridText2'>
					<Form.Label>Desciption (short)</Form.Label>
					<Form.Control
						type='text'
						placeholder='Shoe Description'
						value={inputValues.description}
						onChange={(e) =>
							setInputValues({
								...inputValues,
								description: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId='formGridNumber'>
					<Form.Label>Price</Form.Label>
					<Form.Control
						type='number'
						placeholder='Price of Shoe'
						value={inputValues.price}
						onChange={(e) =>
							setInputValues({
								...inputValues,
								price: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId='formGridCategory'>
					<Form.Label>Category</Form.Label>
					<Form.Select
						type='number'
						placeholder='Price of Shoe'
						value={inputValues.price}
						onChange={(e) =>
							setInputValues({
								...inputValues,
								price: e.target.value,
							})
						}
					>
						<option selected disabled>
							Select Category
						</option>
						<option value='admin'>Clothing</option>
						<option value='blogger'>Footwear</option>
					</Form.Select>
				</Form.Group>
				<Form.Group controlId='formFile' className='mb-3'>
					<Form.Label>Main Image</Form.Label>
					<Form.Control
						type='file'
						accept='image/png'
						// value={inputValues.file}
						// onChange={(e) =>
						// 	setInputValues({
						// 		...inputValues,
						// 		file: e.target.files[0],
						// 	})
						// }
						onChange={uploadHandler}
					/>
				</Form.Group>
				<Form.Group controlId='one' className='mb-3'>
					<Form.Label>Additional First Image</Form.Label>
					<Form.Control
						type='file'
						accept='image/png'
						// value={inputValues.one}
						// onChange={(e) =>
						// 	setInputValues({
						// 		...inputValues,
						// 		one: e.target.files[0],
						// 	})
						// }
						// id='one'
						onChange={uploadHandler}
					/>
				</Form.Group>
				<Form.Group controlId='two' className='mb-3'>
					<Form.Label>Additional Second Image</Form.Label>
					<Form.Control
						type='file'
						accept='image/png'
						// value={inputValues.six}
						// onChange={(e) =>
						// 	setInputValues({
						// 		...inputValues,
						// 		six: e.target.files[0],
						// 	})
						// }
						// id='two'
						onChange={uploadHandler}
					/>
				</Form.Group>
				<Form.Group controlId='three' className='mb-3'>
					<Form.Label>Additional Third Image</Form.Label>
					<Form.Control
						type='file'
						accept='image/png'
						// value={inputValues.two}
						// onChange={(e) =>
						// 	setInputValues({
						// 		...inputValues,
						// 		two: e.target.files[0],
						// 	})
						// }
						// id='three'
						onChange={uploadHandler}
					/>
				</Form.Group>
				<Form.Group controlId='four' className='mb-3'>
					<Form.Label>Additional Fourth Image</Form.Label>
					<Form.Control
						type='file'
						accept='image/png'
						// value={inputValues.three}
						// onChange={(e) =>
						// 	setInputValues({
						// 		...inputValues,
						// 		three: e.target.files[0],
						// 	})
						// }
						// id='four'
						onChange={uploadHandler}
					/>
				</Form.Group>
				<Form.Group controlId='five' className='mb-3'>
					<Form.Label>Additional Fifth Image</Form.Label>
					<Form.Control
						type='file'
						accept='image/png'
						// value={inputValues.four}
						// onChange={(e) =>
						// 	setInputValues({
						// 		...inputValues,
						// 		four: e.target.files[0],
						// 	})
						// }
						// id='five'
						onChange={uploadHandler}
					/>
				</Form.Group>
				<Form.Group controlId='six' className='mb-3'>
					<Form.Label>Additional Sixth Image</Form.Label>
					<Form.Control
						type='file'
						accept='image/png'
						// id='six'
						// value={inputValues.five}
						onChange={uploadHandler}
					/>
				</Form.Group>

				<div className='d-grid mb-4'>
					<Button
						variant='dark'
						size='lg'
						type='submit'
						onClick={onSubmitHandler}
					>
						Add
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export async function getServerSideProps({ params }) {
	console.log('passed ed e de  d', params);
	return {
		props: {
			productId: params.id,
		},
	};
}

export default Add;
