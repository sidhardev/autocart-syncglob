import DetailsCard from "../../common/DetailsCard";

function AdDetailsCard({ ad }) {
  const fields = [
    { label: "Title", key: "title" },
    { label: "Category", key: "category" },
    {
      label: "Youtube Link",
      key: "youtubeLink",
      type: "link",
      linkText: "Youtube",
    },
    { label: "Vehicle License Number", key: "vehicleNumber" },
    { label: "Mileage", key: "mileage" },
    { label: "Type", key: "sellerType" },
  ];

  return (
    <DetailsCard
      title="Ads Details"
      data={ad}
      fields={fields}
      description={ad.description}
      descriptionLabel="Description"
    />
  );
}

export default AdDetailsCard;
