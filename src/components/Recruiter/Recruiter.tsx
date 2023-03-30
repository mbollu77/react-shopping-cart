import sruthipic from './jeremy-akeze-doghouse-it-recruitment.jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="Sruthi Narla"
        src={sruthipic}
      />
    </S.Thumbnail>
    <S.Description>
      <h4>
        Lives in Florida, USA
        <S.Flag />
      </h4>
      <p>
        Hi! I'm Sruthi Narla from University of North Florida and I'm looking for
        full-stack developer jobs.
        <a href="https://www.linkedin.com/in/sruthinarla">
          <b>follow me on Linkedin.</b>
        </a>
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
