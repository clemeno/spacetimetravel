import { Component, OnInit } from '@angular/core'
import { DateTime } from 'luxon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sttclient'

  DateTime = DateTime

  clockInterval: any

  clockrefreshIntervalSeconds = 1

  bClockRunning = false

  mNow = DateTime.now()

  nowIso = this.mNow.toISO()

  nowDttz = this.mNow.toFormat('D TT z')

  nowUnix = this.mNow.toSeconds()

  mTodayStart = this.mNow.startOf('day')

  todayStartIso = this.mTodayStart.toISO()

  todayStartDttz = this.mTodayStart.toFormat('D TT z')

  todayStartUnix = this.mTodayStart.toSeconds()

  mTodayStop = this.mNow.endOf('day')

  todayStopIso = this.mTodayStop.toISO()

  todayStopDttz = this.mTodayStop.toFormat('D TT z')

  todayStopUnix = this.mTodayStop.toSeconds()

  m1990Utc = DateTime.fromObject({ year: 1990 }, { zone: 'UTC' }).startOf('year')

  iso1990Utc = this.m1990Utc.toISO()

  unix1990Utc = this.m1990Utc.toSeconds()

  m1997Utc = DateTime.fromObject({ year: 1997 }, { zone: 'UTC' }).startOf('year')

  iso1997Utc = this.m1997Utc.toISO()

  unix1997Utc = this.m1997Utc.toSeconds()

  now1997s = this.mNow.diff(this.m1997Utc, 'seconds').toObject().seconds

  todayStart1997s = this.mTodayStart.diff(this.m1997Utc, 'seconds').toObject().seconds

  todayStop1997s = this.mTodayStop.diff(this.m1997Utc, 'seconds').toObject().seconds

  mTodayDuration = this.mTodayStop.diff(this.mTodayStart)

  minutesADay = Math.round(this.mTodayDuration.as('minutes'))

  secondsADay = Math.round(this.mTodayDuration.as('seconds'))

  m7DaysAgo = this.mNow.minus({ days: 7 })

  mLast7DaysDuration = this.mNow.diff(this.m7DaysAgo)

  secondsIn7Days = Math.round(this.mLast7DaysDuration.as('seconds'))

  m7DaysAgoStart = this.m7DaysAgo.startOf('day')

  _7DaysAgoStartIso = this.m7DaysAgoStart.toISO()

  _7DaysAgoStartDttz = this.m7DaysAgoStart.toFormat('D TT z')

  _7DaysAgoStartUnix = this.m7DaysAgoStart.toSeconds()

  _7DaysAgoStart1997s = this.m7DaysAgoStart.diff(this.m1997Utc, 'seconds').toObject().seconds

  m30DaysAgo = this.mNow.minus({ days: 30 })

  mLast30DaysDuration = this.mNow.diff(this.m30DaysAgo)

  secondsIn30Days = Math.round(this.mLast30DaysDuration.as('seconds'))

  m30DaysAgoStart = this.m30DaysAgo.startOf('day')

  _30DaysAgoStartIso = this.m30DaysAgoStart.toISO()

  _30DaysAgoStartDttz = this.m30DaysAgoStart.toFormat('D TT z')

  _30DaysAgoStartUnix = this.m30DaysAgoStart.toSeconds()

  _30DaysAgoStart1997s = this.m30DaysAgoStart.diff(this.m1997Utc, 'seconds').toObject().seconds

  unixTimestampInput = ''

  constructor () { }

  ngOnInit () {
    this.clockStart()
  }

  onClockTick () {
    this.mNow = DateTime.now()

    this.nowIso = this.mNow.toISO()
    this.nowDttz = this.mNow.toFormat('D TT z')
    this.nowUnix = this.mNow.toSeconds()
    this.now1997s = this.mNow.diff(this.m1997Utc, 'seconds').toObject().seconds

    this.mTodayStart = this.mNow.startOf('day')

    this.todayStartIso = this.mTodayStart.toISO()
    this.todayStartDttz = this.mTodayStart.toFormat('D TT z')
    this.todayStartUnix = this.mTodayStart.toSeconds()
    this.todayStart1997s = this.mTodayStart.diff(this.m1997Utc, 'seconds').toObject().seconds

    this.mTodayStop = this.mNow.endOf('day')

    this.todayStopIso = this.mTodayStop.toISO()
    this.todayStopDttz = this.mTodayStop.toFormat('D TT z')
    this.todayStopUnix = this.mTodayStop.toSeconds()
    this.todayStop1997s = this.mTodayStop.diff(this.m1997Utc, 'seconds').toObject().seconds

    this.m7DaysAgo = this.mNow.minus({ days: 7 })

    this.m7DaysAgoStart = this.m7DaysAgo.startOf('day')

    this._7DaysAgoStartIso = this.m7DaysAgoStart.toISO()
    this._7DaysAgoStartDttz = this.m7DaysAgoStart.toFormat('D TT z')
    this._7DaysAgoStartUnix = this.m7DaysAgoStart.toSeconds()
    this._7DaysAgoStart1997s = this.m7DaysAgoStart.diff(this.m1997Utc, 'seconds').toObject().seconds

    this.m30DaysAgo = this.mNow.minus({ days: 30 })

    this.m30DaysAgoStart = this.m30DaysAgo.startOf('day')

    this._30DaysAgoStartIso = this.m30DaysAgoStart.toISO()
    this._30DaysAgoStartDttz = this.m30DaysAgoStart.toFormat('D TT z')
    this._30DaysAgoStartUnix = this.m30DaysAgoStart.toSeconds()
    this._30DaysAgoStart1997s = this.m30DaysAgoStart.diff(this.m1997Utc, 'seconds').toObject().seconds
  }

  clockStop () {
    clearInterval(this.clockInterval)
    this.bClockRunning = false
  }

  clockStart () {
    this.onClockTick()
    this.clockInterval = setInterval(() => { this.onClockTick() }, 1000 * this.clockrefreshIntervalSeconds)
    this.bClockRunning = true
  }

  onRefreshIntervalChange () {
    this.clockStop()
    this.clockStart()
  }
}
