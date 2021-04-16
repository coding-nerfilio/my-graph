const DonwloadCanvas = () => {
	var link = document.createElement("a");
	link.download = "mygraph-" + Math.floor(Date.now() / 1000) + ".png";
	link.href = document.getElementsByTagName("canvas")[0]!.toDataURL();
	link.click();
};

export { DonwloadCanvas };
