import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastsActions from '~/store/ducks/podcasts';

import {
  Container,
  PodcastList,
  PageTitle,
  Podcast,
  Cover,
  Info,
  Title,
  Count,
} from './styles';

const Main = ({ podcasts, loadRequest }) => {
  useEffect(() => {
    loadRequest();

    return () => null;
  }, [loadRequest]);

  return (
    <Container>
      <PodcastList
        data={podcasts.data}
        bounce
        ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
        keyExtractor={podcast => String(podcast.id)}
        renderItem={({ item: podcast }) => (
          <Podcast onPress={() => {}}>
            <Cover source={{ uri: podcast.cover }} />
            <Info>
              <Title>{podcast.title}</Title>
              <Count>{`${podcast.tracks.length} episódios`}</Count>
            </Info>
          </Podcast>
        )}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  podcasts: state.podcasts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
