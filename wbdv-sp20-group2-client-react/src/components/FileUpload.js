import React, {Fragment, useState} from 'react';
import Message from './Message';
import axios from 'axios';

const getRecipes = async dishes => {
    let response = {}
    try {
        response =
            await axios.get(
                `https://api.edamam.com/search?app_id=8c82a996&app_key=4c99b8e052177acab7281af278080f6f&q=${dishes}&from=0&to=1`);
    } catch {
        console.error("There's an error while fetching the data")
    } finally {
        return response
    }
}

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [labels, setLabels] = useState([])

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            const {fileName, filePath, resultSummaries} = res.data;

            const labelsWithRecipe = await Promise.all(resultSummaries.map(async label => {
                const recipe = await getRecipes(label.description);

                if (recipe && recipe.data && recipe.data.hits) {
                    return {...label, recipe: recipe.data.hits[0].recipe}
                }
                return {label, recipe: null};

            }))

            setUploadedFile({fileName, filePath});
            setLabels(labelsWithRecipe);

            setMessage('File Uploaded');
        } catch (err) {
            console.log({err});
            // if (err && err.response && err.response.status === 500) {
            //     setMessage('There was a problem with the server');
            // } else {
            //     setMessage(err.response.data.msg);
            // }
        }
    };

    return (
        <Fragment>
            {message ? <Message msg={message}/> : null}
            <form onSubmit={onSubmit}>
                <div className='custom-file mt-4'>
                    <input
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                        onChange={onChange}
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                    </label>
                </div>

                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mt-4'
                />
            </form>
            {/* Uploaded file renders */}
            {uploadedFile ? (
                <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                        <h3 className='text-center'>{uploadedFile.fileName}</h3>
                        <img style={{width: '100%'}} src={uploadedFile.filePath} alt=''/>
                    </div>
                </div>
            ) : null}
            {labels.map(label => <div>
                <h1>Guess: {label.description}</h1>
                <p>Score: {label.score}</p>

                {label.recipe && (<><h1>Matched recipe for today: {label.recipe.label}</h1>
                    <img src={label.recipe.image} alt={label.recipe.label}/></>)}
            </div>)}
        </Fragment>
    );
};

export default FileUpload;