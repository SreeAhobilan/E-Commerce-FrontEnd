import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from '../components/Announcements';
import Products from "../components/Products";

const Container=styled.div`

`
const Title=styled.h1`
    margin:20px;
`
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter=styled.div`
    margin:20px;
`
const FilterText=styled.div`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`
const Select=styled.select`
    padding:10px;
    margin-right:20px;
`
const Option=styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Category
                        </Option>
                        <Option>Electronics</Option>
                        <Option>Laptops</Option>
                        <Option>Tablets</Option>
                        <Option>Mobile Phones</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort By:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
        </Container>
    )
}

export default ProductList
