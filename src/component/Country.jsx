import React from "react";
import { Select, Option } from "@material-tailwind/react";
import allCountry from "../database/data.json";
import "./css/App.css"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
const Services = ({ data }) => {
  return (
    <div class="data-all grid grid-cols-4 gap-4 -mt-3 px-6 py-6">
      <div className="data-1">
        <Card className="max-w-[24rem] overflow-hidden max-h-96">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src="https://media.istockphoto.com/id/835757276/photo/german-flag.jpg?b=1&s=170667a&w=0&k=20&c=p86m4ntiYYGPTZkGTC4wm6QPWzeupkFQCD4eL56o9B4=" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Germany
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              <p> population:81 78788</p>
              <p> region: Europe</p>
              <p> capital:Berlin</p>
            </Typography>
          </CardBody>
        </Card>
      </div>

      <div className="data-2">
        <Card className="max-w-[24rem] overflow-hidden max-h-96">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              United state of America
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              <p> population:81 78788</p>
              <p> region: Europe</p>
              <p> capital:Berlin</p>
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between"></CardFooter>
        </Card>
      </div>
      <div className="data-3">
        <Card className="max-w-[24rem] overflow-hidden max-h-96">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src="https://media.istockphoto.com/id/967321044/vector/vector-flag-of-brazil-proportion-7-10-brazilian-national-flag.jpg?s=612x612&w=0&k=20&c=lKrHddeZEPnO9yF5lVhZY_j09035BphxRqxnG7JYy7U=" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Brazil
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              <p> population:81 78788</p>
              <p> region: Europe</p>
              <p> capital:Berlin</p>
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between"></CardFooter>
        </Card>
      </div>

      <div className="data-4">
        <Card className="max-w-[24rem] overflow-hidden max-h-96 mb-10">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src="https://cdn.britannica.com/85/1485-004-94C3DEDA/Flag-Iceland.jpg" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Iceland
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              <p> population:81 78788</p>
              <p> region: Europe</p>
              <p> capital:Berlin</p>
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between"></CardFooter>
        </Card>
      </div>
      <div className="data-5">
        <Card className="max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src="https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Afgnistan
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              <p> population:81 78788</p>
              <p> region: Europe</p>
              <p> capital:Berlin</p>
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between"></CardFooter>
        </Card>
      </div>

      <div className="data-6">
        <Card className="max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src="https://s3.amazonaws.com/images.wpr.com/flag-pages/png1000/ax.png" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Aland island
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              <p> population:81 78788</p>
              <p> region: Europe</p>
              <p> capital:Berlin</p>
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between"></CardFooter>
        </Card>
      </div>
      <div className="data-7">
        <Card className="max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src="https://media.istockphoto.com/id/1270760331/vector/albania-flag-vector-graphic-rectangle-albanian-flag-illustration-albania-country-flag-is-a.jpg?s=612x612&w=0&k=20&c=br2o8a_2aG1VxuEP9u77Sw1cUAgPWGNAisTW43eTH6A=" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Albania
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              <p> population:81 78788</p>
              <p> region: Europe</p>
              <p> capital:Berlin</p>
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between"></CardFooter>
        </Card>
      </div>

      <div className="data-8">
        <Card className="max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/2560px-Flag_of_Algeria.svg.png" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Algeria
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              <p> population:81 78788</p>
              <p> region: Europe</p>
              <p> capital:Berlin</p>
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Services;
