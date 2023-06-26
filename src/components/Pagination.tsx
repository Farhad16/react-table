import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";

function Pagination({ page, setPage, numberOfPages }: any) {
  return (
    <div className="flex flex-row items-center gap-1 font-['Inter'] text-white">
      <ArrowBackIosIcon
        sx={{
          fontSize: "18px",
          color: "white",
          fontWeight: "bold",
          cursor: page !== 1 ? "pointer" : "default",
          pointerEvents: page === 1 ? "none" : "",
          opacity: page === 1 ? ".3" : "1",
        }}
        onClick={() => setPage(page - 1)}
      />
      <div className="flex flex-row items-center gap-1">
        {[...Array(numberOfPages)].map((_, idx) => (
          <IconButton
            className={`!rounded-md w-8 h-8 ${
              idx + 1 === page && "!bg-slate-400 !bg-opacity-20"
            }`}
            key={idx}
            onClick={() => setPage(idx + 1)}
          >
            <span className="text-[14px] font-semibold text-white">
              {idx + 1}
            </span>
          </IconButton>
        ))}
      </div>
      <ArrowForwardIosIcon
        sx={{
          fontSize: "18px",
          color: "white",
          fontWeight: "bold",
          cursor: page !== numberOfPages ? "pointer" : "default",
          pointerEvents: page === numberOfPages ? "none" : "",
          opacity: page === numberOfPages ? ".3" : "1",
        }}
        onClick={() => setPage(page + 1)}
      />
    </div>
  );
}

export default Pagination;
