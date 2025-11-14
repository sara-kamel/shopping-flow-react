import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const Category = () => {

    return (
        <div>
            <h1 className="category-section-title">Shope by Category</h1>
            <br />
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} >
                <Card
                    categoryText="Kids"
                    categoryClassName="category-card-kids"
                />
                <Card
                    categoryText="Women"
                    categoryClassName="category-card-women"
                />
                <Card
                    categoryText="Men"
                    categoryClassName="category-card-men"
                />
                <Card
                    categoryText="Clearance"
                    categoryClassName="category-card-clearance"
                />
            </Stack>
        </div>
    )
}


const Card = ({ categoryText, categoryClassName }) => {
    const navigate = useNavigate();
    return (
        <div className={`category-card ${categoryClassName}`}
            onClick={() =>
                navigate('/products')
            }>
            <h3>{categoryText}</h3>
        </div>
    )
}
