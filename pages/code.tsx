import { useRouter } from "next/router";
import QRCode from "qrcode.react";
import queryString from "query-string";

const code = () => {
	const router = useRouter();

	const code = queryString.parseUrl(router.asPath).query;

	return (
		<div className="container m-auto flex h-screen items-center justify-center flex-col font-sans">
			<div className="text-bold text-3xl mb-10 text-center">
				Scan this code to get the download your files
			</div>
			<QRCode
				value={
					code["code"]
						? `${window.location.origin}/read?code=${code["code"]}`
						: "invalid"
				}
			/>

			<div className="my-6">
				or receiver can type in this code <b>{code["code"]}</b>
			</div>
		</div>
	);
};

export default code;
