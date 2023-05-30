import React, {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom';
import { Box } from '@mui/material';
import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import ExerciseVideos from '../components/ExerciseVideos';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';

function ExerciseDetail() {

  const [ exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const [ exerciseVideos, setExerciseVideos] = useState([]);


  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      //API Calls 
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);


      //Video Api call
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);


    }
    fetchExercisesData();


  },[id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />

    </Box>
  )
}

export default ExerciseDetail