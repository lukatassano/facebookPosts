import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  margin: 0 auto 20px;

  .post {
    margin-top: 20px;
    border-radius: 8px;
    background: white;
    padding: 20px;
    color: #3e3e3e;
    line-height: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .post-header {
    display: flex;
    align-items: center;
  }

  .post-header .details {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  color: #9a9a9a;
  line-height: 14px;
}

.avatar {
  min-height: 32px;
  min-width: 32px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

.post-content {
  margin-top: 15px;
  font-size: 14px;
}

.divider {
  width: 100%;
  height: 1px;
  background: #eeeeee;
}

.post-comments {
  margin-top: 20px;
}

.comment {
  margin-top: 20px;
  display: flex;
}

.comment p {
  border-radius: 20px;
  background: #eeeeee;
  margin-left: 10px;
  padding: 15px;
  font-size: 13px;
}

.comment span {
  font-weight: bold;
  margin-right: 6px;
}
.post-header .details span:first-child {
    font-size: 14px;
    color: #4a4a4a;
    font-weight: bold;
    margin-bottom: 3px;
  }
`;