import Problem from './Problem';
import Resolution from './Resolution';
import SubmitButtons from './SubmitButtons';

const ResolutionPage = () => {

    return (
        <div className='d-flex flex-column res-page gap-4 h-100'>
            <div className='page-title text-muted'>Case</div>
            <Problem />
            <Resolution />
            <SubmitButtons />
        </div>
    );
};

export default ResolutionPage;