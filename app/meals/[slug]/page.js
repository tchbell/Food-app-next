export default function MealsSlugPage({ params }) {
    return (
      <>
        <h1>Meals Slug Page</h1>
        <p>{params.slug}</p>
      </>
    );
  }