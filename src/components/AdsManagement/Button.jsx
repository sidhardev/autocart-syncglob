import CommonButton from "../../common/Button";

function AdButton({ text, onClick, sx, ...props }) {
  return <CommonButton text={text} onClick={onClick} sx={sx} {...props} />;
}

export default AdButton;
